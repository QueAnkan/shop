import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-white'>
            <h1>Welcome!</h1>
            <Button>Click me!</Button>
        </main>
    );
}
