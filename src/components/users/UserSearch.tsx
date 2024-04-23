import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { GithubContext, IGithubContext } from "../../context/github/GithubContext";
import { ILoadingContext, LoadingContext } from "../../context/loading/LoadingContext";

const UserSearch = () => {

    const { searchUsers, clearUsers, total } = useContext(GithubContext) as IGithubContext;
    const { setLoadingFalse, setLoadingTrue } = useContext(LoadingContext) as ILoadingContext;

    const [pageTotal, setPageTotal] = useState<number>(0);
    const [text, setText] = useState<string>('');

    useEffect(() => {
        setPageTotal(total ? total : 0);
    }, [total]);

    const handlClear = () => {
        clearUsers();
        setText('');
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoadingTrue();
        await searchUsers(text);
        setLoadingFalse();
    };
    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <div className='relative'>
                            <input
                                type='text'
                                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                                placeholder='Search'
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            <button
                                type='submit'
                                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                            >
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {pageTotal > 0 && (<div>
                <button
                    onClick={handlClear}
                    className='btn btn-ghost btn-lg'
                >
                    Clear
                </button>
            </div>)}
        </div>
    )
}

export default UserSearch;
