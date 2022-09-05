import { useSearchUsersQuery } from "../store/github/github.api";

export const HomePage = () => {
    const { isLoading, isError, data } = useSearchUsersQuery('tigran')
    console.log(isLoading, isError, data)
    return <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
        {isError && <p className="text-center text-red-600">Something went wrong ...</p>}
        <div className="relative w-[560px]">
            <input type="text" className="border py-2 px-4 w-full h-[42px] mb-2" placeholder="Search for Github username"/>
        </div>
    </div>
}