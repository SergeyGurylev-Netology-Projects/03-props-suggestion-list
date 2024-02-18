import './App.css';
import { etsy_data } from '../data/etsy.ts';
import { Listing, ListingItems } from '../components/Listing.tsx';

const listingItems: ListingItems = [];

etsy_data.forEach(el => {
    if (el.url) {
        listingItems.push({
            listing_id: el.listing_id,
            url: el.url,
            MainImage: el.MainImage && el.MainImage.url_570xN,
            title: el.title,
            currency_code: el.currency_code,
            price: el.price,
            quantity: el.quantity,
        });
    }});

function App() {

  return (
    <>
      <Listing items={listingItems}/>
    </>
  )
}

export default App
