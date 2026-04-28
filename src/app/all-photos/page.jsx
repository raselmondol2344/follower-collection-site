import PhotoCard from "@/components/PhotoCard";


const allphotos =async () => {
    const res = await fetch ("https://follower-collection-site.vercel.app/data.json")
    const photos = await res.json();
    return (
       <div>
         <h1 className="font-bold m-5 text-2xl">All Photos</h1>
        <div className="grid grid-cols-4 gap-5">
            
           {
            photos.map(photo=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
           }
            
        </div>
       </div>
    );
};

export default allphotos;