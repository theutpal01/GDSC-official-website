import Image from 'next/image';
import medium from "@/assets/medium-blog.svg"
import blogBadge from "@/assets/blog-badge.svg"

const BlogCover = ({ i: key, text }: { i: number, text: string }) => {
    const blueColor = '#6da4fc';
    return (<div className='items-center justify-center flex-1 hidden h-full md:flex'>
        <div className='relative w-[70%] aspect-square'>
            <div style={{ backgroundColor: key % 2 !== 0 ? blueColor : "white" }} className='absolute z-10 w-full transition-all border-2 border-black rounded-md aspect-square'></div>
            <div style={{ backgroundColor: key % 2 === 0 ? blueColor : "white" }} className='absolute z-0 w-full transition-all border-2 border-black rounded-md aspect-square -rotate-12'></div>
            <div className='absolute bottom-[10%] left-[10%] w-[20%] h-[60px] z-20'>
                <Image src={medium} alt="medium blog" fill />
            </div>
            <div style={{ rotate: `${key}0deg` }} className='absolute bottom-[2%] right-[2%] w-[50%] aspect-square z-20 transition-all'>
                <Image src={blogBadge} alt="medium blog" fill />
            </div>
            <h1 className='absolute z-30 font-mono font-semibold text-black xl:text-5xl top-4 left-4 lg:text-3xl'>{text}</h1>
        </div>
    </div>
    )
}


export default BlogCover;