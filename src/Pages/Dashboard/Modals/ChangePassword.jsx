import { useState } from "react";
import { FaLock, FaUnlock } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const ChangePassword = ({ setOpenPassModal }) => {
    const [showOldPass, setShowOldPass] = useState(false)
    const [newPass, setNewPass] = useState(false)
    const [confirmPass, setConfirmPass] = useState(false)
    const { passwordUpdate, reauthencticateUser } = useAuth()

    const handleChangePassword = (e) => {
        e.preventDefault()
        const form = e.target
        const currentPass = form.currentPass.value
        const newPassword = form.newPass.value
        const confirmPass = form.confirmPass.value
        console.log(form, currentPass, newPassword, confirmPass);
        if (currentPass == newPassword) {
            return Swal.fire("New password can't be same as current password");
        }
        if (newPassword !== confirmPass) {
            return Swal.fire("New password and confirm password must match");
        }
        reauthencticateUser(currentPass)
            .then(() => {
                return passwordUpdate(newPassword)
            })
            .then(() => {
                Swal.fire({
                    title: "Password updated successfully!",
                    icon: "success",
                    timer: 1500,
                    background: "#dcfce7",
                });
                e.reset()
            })
            .catch((error) => {
                console.error("Error updating password", error);
                Swal.fire({
                    title: "Please type your valid password",
                    text: error.message,
                    icon: "error",
                });
            });
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-green-100 w-full max-w-lg rounded-lg p-6 shadow-lg border border-green-300">
                <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Change Password</h2>
                <form onSubmit={handleChangePassword} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-green-700 mb-1">Current Password</label>
                        <div className="relative">
                            <input name="currentPass" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type={showOldPass ? 'text' : 'password'} required placeholder="••••••••" />
                            <span onClick={() => setShowOldPass(!showOldPass)} title="Show Password" className="cursor-pointer">
                                {
                                    showOldPass ? <FaUnlock className="absolute right-4 top-3.5 text-green-400" /> :
                                        <FaLock className="absolute right-4 top-3.5 text-green-400" />
                                }
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-green-700 mb-1">New Password</label>
                        <div className="relative">
                            <input name="newPass" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type={newPass ? 'text' : 'password'} required placeholder="••••••••" />
                            <span onClick={() => setNewPass(!newPass)} title="Show Password" className="cursor-pointer">
                                {
                                    newPass ? <FaUnlock className="absolute right-4 top-3.5 text-green-400" /> :
                                        <FaLock className="absolute right-4 top-3.5 text-green-400" />
                                }
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-green-700 mb-1">Confirm Password</label>
                        <div className="relative">
                            <input name="confirmPass" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type={confirmPass ? 'text' : 'password'} required placeholder="••••••••" />
                            <span onClick={() => setConfirmPass(!confirmPass)} title="Show Password" className="cursor-pointer">
                                {
                                    confirmPass ? <FaUnlock className="absolute right-4 top-3.5 text-green-400" /> :
                                        <FaLock className="absolute right-4 top-3.5 text-green-400" />
                                }
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 p-2">
                        <button onClick={() => setOpenPassModal(false)} type="button" className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cansel</button>
                        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Update Password</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;