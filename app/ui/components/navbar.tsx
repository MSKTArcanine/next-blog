import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex gap-4 p-8 border-b border-primary-content">
            <Image
                src="https://placehold.co/40x40/png"
                width={40}
                height={40}
                alt="Test"
            />
            <ul className="flex flex-row gap-4 flex-1 justify-end-safe">
                <li className="flex justify-center items-center">Blog posts</li>
                <li className="flex justify-center items-center">Editor</li>
            </ul>
            <ul className="flex gap-4 end">
                <li><button className="btn btn-default rounded-md">Sign in</button></li>
                <li><Link href={'/register'} className="btn btn-primary rounded-md">Register</Link></li>
            </ul>
        </nav>
    )
}