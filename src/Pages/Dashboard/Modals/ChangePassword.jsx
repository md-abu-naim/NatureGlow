import { useState } from "react";
import { FaLock, FaUnlock } from "react-icons/fa";

const ChangePassword = ({setOpenPassModal}) => {
    const [showOldPass, setShowOldPass] = useState(false)
    const [newPass, setNewPass] = useState(false)
    const [confirmPass, setConfirmPass] = useState(false)
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-green-100 w-full max-w-lg rounded-lg p-6 shadow-lg border border-green-300">
                <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Change Password</h2>
                <form onSubmit={""} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-green-700 mb-1">Current Password</label>
                        <div className="relative">
                            <input name="password" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type={showOldPass ? 'text' : 'password'} required placeholder="••••••••" />
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
                            <input name="password" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type={newPass ? 'text' : 'password'} required placeholder="••••••••" />
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
                            <input name="password" className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type={confirmPass ? 'text' : 'password'} required placeholder="••••••••" />
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