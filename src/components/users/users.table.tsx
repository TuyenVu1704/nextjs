import { useEffect, useState } from "react";
// import "../../styles/users.css";
import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import CreateUsersModal from "./create.users.modal";
import UpdateUsersModal from "./update.users.modal";

export interface IUser {
    email: string;
    name: string;
    role: string;
    password: string;
    age: string;
    gender: string;
    address: string;
}
const UsersTable = () => {
    const [listUser, setListUser] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isUpdateUserModalOpen, setIsUpdateUserModalOpen] = useState(false);

    const [dataUpdate, setDataUpdate] = useState<null | IUser>(null);

    const access_token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0b2tlbiBsb2dpbiIsImlzcyI6ImZyb20gc2VydmVyIiwiX2lkIjoiNjUyM2U0NTA5M2M4YzcyMDBmNTlmNWMyIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJhZGRyZXNzIjoiVmlldE5hbSIsImlzVmVyaWZ5Ijp0cnVlLCJuYW1lIjoiSSdtIGFkbWluIiwidHlwZSI6IlNZU1RFTSIsInJvbGUiOiJBRE1JTiIsImdlbmRlciI6Ik1BTEUiLCJhZ2UiOjY5LCJpYXQiOjE2OTcyNjkzMjMsImV4cCI6MTc4MzY2OTMyM30.qC4wWGc7FTPsEZUSqZFOs1G8D9OMS1LE9pLN6l3If98";
    const getData = async () => {
        const res = await fetch("http://localhost:8000/api/v1/users/all", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${access_token}`,
            },
        });
        const d = await res.json();
        console.log(">>> check data fetch", d.data.result);
        setListUser(d.data.result);
    };

    useEffect(() => {
        getData();
    }, []);

    const columns: ColumnsType<IUser> = [
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Role",
            dataIndex: "role",
        },
        {
            title: "Action",
            dataIndex: "",
            render: (value) => {
                return (
                    <div>
                        <Button
                            icon={<EditOutlined />}
                            onClick={() => {
                                setDataUpdate(value);
                                setIsUpdateUserModalOpen(true);
                            }}
                        />
                    </div>
                );
            },
        },
    ];

    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <h2>User List </h2>
                <div>
                    <Button
                        icon={<PlusOutlined />}
                        type="primary"
                        onClick={showModal}
                    >
                        Add Users
                    </Button>
                </div>
            </div>

            <Table columns={columns} dataSource={listUser} rowKey={"_id"} />
            <CreateUsersModal
                access_token={access_token}
                getData={getData}
                isCreateUserModalOpen={isModalOpen}
                setIsCreateUserModalOpen={setIsModalOpen}
            />
            <UpdateUsersModal
                access_token={access_token}
                getData={getData}
                isUpdateUserModalOpen={isUpdateUserModalOpen}
                setIUpdateUserModalOpen={setIsUpdateUserModalOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
            />
        </div>
    );
};

export default UsersTable;
