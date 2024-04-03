export function VideoCard(){
    return (
        <div>
        <div>
        <img className="rounded-xl" src="/photo.png" alt="photo" />
        </div>
        <div className="grid grid-cols-12 pt-2">
           <div className="col-spnan-1">
            <img src="/photo.png" alt="photo" className="rounded-full w-20 h-20"/>
           </div>
              <div className="col-span-11">
                <div className="text-lg font-bold">Title</div>
                <div className="text-base text-gray-500">Channel</div>
               <div className="text-base text-gray-500"> Views |  Time</div>
                </div>
        </div>
        </div>
    );
}