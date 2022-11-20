import Link from 'next/link'

function ButtonCard({ text, href }) {
    return <Link href={href ? href : ''} >
        <a>
            <button className="rounded-full text-gray-800 bg-slate-300 h-7 w-fit px-2 m-1" >{text} </button>
        </a>
    </Link>

}

export default ButtonCard