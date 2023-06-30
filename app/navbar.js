import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex justify-around">
            <div>
                <h1>MOVIE</h1>
            </div>
            <div className="border border-indigo-500" />
            <Link href="/pages">Movies</Link>
            <Link href="/pages">TV show</Link>
            <i className="bi bi-search">
        <textarea class="caret-blue-500 md:caret-indigo-500 w-{50px} h-4 text-indigo-500"></textarea>
        </i>
            
            <Link href="/pages">favorite</Link>
        </div>
    )
}