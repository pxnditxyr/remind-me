

export const Sidebar = () => {
    const name = 'Enrique';
    return (
        <aside>
            <div>
                <span> { name } </span>
            </div>
            <div>
                {
                    [ 'Junary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ].map( month => (
                        <article key={ month }>
                            <img src={ `https://picsum.photos/200/200?month=${ month }` } alt={ month } />
                            <section>
                                <span> { month } </span>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </section>

                        </article>
                    ))
                }
            </div>
        </aside>
    );
};
