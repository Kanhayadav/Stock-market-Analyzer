export default function Nav() {
    return (
        //pure html will return only one elements
        <nav className="bg-gray-800 flex gap-6 text-white justify-end items-center p-4 mt-4">

            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Dashboard</a>
            <a href="#auth" className="hover:underline">Log in</a>
            <a className="bg-red-500 px-5 py-2 rounded cursor-pointer" href="#auth">Signup</a>

        </nav>
    );
}
