import { Avatar } from "./BlogCard"

const Appbar = () => {
  return (
    <div className="border-b flex justify-between items-center px-10 py-4">
        <div>Medium</div>
        <div>
            <Avatar name="Amit" size="big"/>
        </div>
    </div>
  )
}

export default Appbar