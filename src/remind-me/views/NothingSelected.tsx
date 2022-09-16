
export const NothingSelected = () => {
    return (
        <div className="flex flex-col items-center h-full justify-center text-2xl text-gray-700 p-4 gap-y-8">
            <h1 className="text-3xl font-bold animate-bounce"> Nothing Selected </h1>
            <picture className="w-3/5 bg-gray-200 rounded-xl">
                <img
                    src="https://angelovonn.github.io/hayao/assets/images/totoro-&-friends/totoro.svg"
                    alt="totoro"
                    />
            </picture>
        </div>
    );
}
