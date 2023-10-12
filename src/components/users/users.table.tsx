import { useEffect, useState } from "react";
import "../../styles/users.css";

interface IUser {
    email: string;
    name: string;
    role: string;
}
const UsersTable = () => {
    const [listUser, setListUser] = useState([]);

    const getData = async () => {
        const access_token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0b2tlbiBsb2dpbiIsImlzcyI6ImZyb20gc2VydmVyIiwiX2lkIjoiNjUyM2U0NTA5M2M4YzcyMDBmNTlmNWMyIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJhZGRyZXNzIjoiVmlldE5hbSIsImlzVmVyaWZ5Ijp0cnVlLCJuYW1lIjoiSSdtIGFkbWluIiwidHlwZSI6IlNZU1RFTSIsInJvbGUiOiJBRE1JTiIsImdlbmRlciI6Ik1BTEUiLCJhZ2UiOjY5LCJpYXQiOjE2OTY5MTc2OTcsImV4cCI6MTc4MzMxNzY5N30.pqMysbKeYliicG_GFFABuEFPDgV8fzR60XwyLAFU1sU";

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

    return (
        <div>
            <h2>User List </h2>

            <table>
                <thead>
                    <tr>
                        <td>Email</td>
                        <td>Name</td>
                        <td>Role</td>
                    </tr>
                </thead>
                <tbody>
                    {listUser.map((item: IUser, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.email}</td>
                                <td>{item.name}</td>
                                <td>{item.role}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
