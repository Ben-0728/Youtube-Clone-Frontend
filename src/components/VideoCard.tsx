export function VideoCard(props: any){
    return (
        <div className="pt-2 cursor-pointer">
        <div>
        <img className="rounded-xl" src={props.image} alt="photo" />
        </div>
        <div className="grid grid-cols-12 pt-2 justify-between">
           <div className="col-span-1 w-20">
            <img src={props.thumb} alt="photo" className="rounded-full w-12 h-12"/>
           </div>
              <div className="col-span-11 pl-5">
                <div className="text-lg font-bold">{props.title}</div>
                <div className="text-base text-gray-400">{props.author}</div>
                <div className="text-base text-gray-400"> {props.views} | {props.timestamp}</div>
              </div>
        </div>
        </div>
    );
}