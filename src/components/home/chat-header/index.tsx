import {X} from "lucide-react"
import {useChatStore} from "../../../store/useChatStore"
import {useAuthStore} from "../../../store/useAuthStore"

const ChatHeader = () => {
    const {selectedUser, setSelectedUser} = useChatStore()
    const {onlineUsers} = useAuthStore()

    return (
        <div className="p-2.5 border-b border-base-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="size-10 rounded-full relative">
                            <img
                                src={
                                    selectedUser?.profilePic ||
                                    "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                                }
                                alt={selectedUser?.fullName}
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium">
                            {selectedUser?.fullName}
                        </h3>
                        <p className="text-sm text-base-content/70">
                            {onlineUsers.includes(selectedUser!._id)
                                ? "Online"
                                : "Offline"}
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => setSelectedUser(null)}
                    className="cursor-pointer">
                    <X />
                </button>
            </div>
        </div>
    )
}
export default ChatHeader
