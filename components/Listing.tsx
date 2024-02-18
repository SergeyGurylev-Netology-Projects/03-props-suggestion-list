import classes from './listing.module.css'

export type ListingItems = {
    listing_id: number,
    url: string,
    MainImage: string,
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
}[];

type ListingProps = {
    items: ListingItems,
};

export function Listing(props: ListingProps) {

    function title(title:string):string  {
        if (title.length <= 50) {
            return title;
        }

        return title.substring(0, 50) + '...';
    }

    function price(currency_code: string, price:string):string {
        switch (currency_code) {
            case 'USD': {
                return `$${price}`;
            }
            case 'EUR': {
                return `€${price}`;
            }
        }
        return `${price} ${currency_code}`;
    }

    function quantityClasses(quantity: number):string {
        const result = [classes["item-quantity"]];

        if (quantity <= 10) {
            result.push(classes["level-low"]);
        } else if (quantity <= 20) {
            result.push(classes["level-medium"]);
        } else {
            result.push(classes["level-high"]);
        }

        return result.join(' ');
    }

    return (
        <>
            <div className={classes["item-list"]}>
                {props.items.map(el =>
                    <div key={el.listing_id} className={classes["item"]}>
                        <div className={classes["item-image"]}>
                            <a href={el.url}>
                                <img src={el.MainImage} />
                            </a>
                        </div>
                        <div className={classes["item-details"]}>
                            <p className={classes["item-title"]}>{title(el.title)}</p>
                            <p className={classes["item-price"]}>{price(el.currency_code, el.price)}</p>
                            <p className={quantityClasses(el.quantity)}>{el.quantity} left</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

Listing.defaultProperties = {
    items: [],
};
