"use client"

import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";



const PhotoCard = ({photo}) => {
    console.log(photo);
    return (
        <div>
            <Card className=" border rounded-xl">
                <div className=" relative w-full aspect-square">
                    <Image
                    src={photo.imageUrl}
                    fill
                    alt={photo.title}
                    className="object-cover rounded-xl"
                    
                    />
                    <Chip className="absolute right-2 top-2">{photo.category}</Chip>
                </div>

                <div>
                    <h2 className="font-medium">{photo.title}</h2>
                </div>
                

                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                    <p><FaHeart /></p>
                    <p>{photo.likes}</p>
                </div>

                <div className="flex gap-2 items-center">
                    <MdOutlineFileDownload />
                    <p>{photo.downloads}</p>
                </div>

                </div>

            <Button variant="outline" className={'w-full'}>View Details</Button>
            </Card>
            
        </div>
    );
};

export default PhotoCard;