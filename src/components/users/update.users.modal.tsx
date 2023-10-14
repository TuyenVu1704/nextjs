/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal, Input, notification } from "antd";
import { useEffect, useState } from "react";
import { IUser } from "./users.table";

interface IProps {
    access_token: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getData: any;
    isUpdateUserModalOpen: boolean;
    setIUpdateUserModalOpen: (v: boolean) => void;
    dataUpdate: null | IUser;
    setDataUpdate: any;
}

const UpdateUsersModal = (props: IProps) => {
    const {
        access_token,
        getData,
        isUpdateUserModalOpen,
        setIUpdateUserModalOpen,
        dataUpdate,
        setDataUpdate,
    } = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
        if (dataUpdate) {
            setName(dataUpdate.name);
            setEmail(dataUpdate.email);
            setAge(dataUpdate.age);
            setAddress(dataUpdate.address);
            setGender(dataUpdate.gender);
            setRole(dataUpdate.role);
            setPassword(dataUpdate.password);
        }
    }, [dataUpdate]);

    const handleOk = async () => {
        const data = { name, email, password, age, gender, address, role };
        const res = await fetch("http://localhost:8000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${access_token}`,
            },
            body: JSON.stringify({ ...data }),
        });

        const d = await res.json();
        // Check Success and Error
        if (d.data) {
            await getData();
            notification.success({
                message: " Cập nhật user thành công ",
            });
            handleCreateNewUser();
        } else {
            notification.error({
                message: "Có lỗi xảy ra",
                description: d.message,
            });
            setIUpdateUserModalOpen(true);
        }
    };

    const handleCreateNewUser = () => {
        setDataUpdate(null);
        setName("");
        setEmail("");
        setAge("");
        setAddress("");
        setGender("");
        setRole("");
        setPassword("");
        setIUpdateUserModalOpen(false);
    };

    return (
        <div>
            <Modal
                title="Update User"
                open={isUpdateUserModalOpen}
                onOk={handleOk}
                onCancel={() => handleCreateNewUser()}
            >
                <label htmlFor="name">Name</label>
                <Input
                    id="name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <label htmlFor="email">Email</label>
                <Input
                    id="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <label htmlFor="password">Password</label>
                <Input
                    id="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <label htmlFor="age">Age</label>
                <Input
                    id="age"
                    value={age}
                    onChange={(e) => {
                        setAge(e.target.value);
                    }}
                />
                <label htmlFor="gender">Gender</label>
                <Input
                    id="gender"
                    value={gender}
                    onChange={(e) => {
                        setGender(e.target.value);
                    }}
                />
                <label htmlFor="address">Address</label>
                <Input
                    id="address"
                    value={address}
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                />
                <label htmlFor="role">Role</label>
                <Input
                    id="role"
                    value={role}
                    onChange={(e) => {
                        setRole(e.target.value);
                    }}
                />
            </Modal>
        </div>
    );
};

export default UpdateUsersModal;
