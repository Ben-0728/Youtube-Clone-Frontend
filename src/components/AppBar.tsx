import { SearchBar } from "./SearchBar"

export function AppBar(){
    return <div className="flex justify-between p-3">
        <div className="pl-3 pt-4">
            Youtube
        </div>
        <div className="max-sm:hidden block">
            <SearchBar />
        </div>
        <div className="pr-3 pt-4">
            Sign In
        </div>
    </div>
}