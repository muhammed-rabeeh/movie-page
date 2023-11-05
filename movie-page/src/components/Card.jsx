import React from 'react'

const Card = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">
                        Spider-Man: No Way Home
                        <div className="badge badge-secondary">Trailer</div>
                    </h2>
                    <p>Spider-Man seeks the help of Doctor Strange to forget his exposed secret identity as Peter Parker. However, Strange's spell goes horribly wrong, leading to unwanted guests entering their universe.</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Action</div>
                        <div className="badge badge-outline">Adventure</div>
                        <div className="badge badge-outline">Fantacy</div>
                    </div>
                </div>
            </div>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
            <button className="btn bg-primary-focus">Add to Watchlist</button>
        </div>
    )
}

export default Card
