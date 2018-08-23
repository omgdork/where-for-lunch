import { Router } from 'express';
import {
  searchPlaces,
  getPlaceDetails,
} from '../services/yelp';
import {
  toSearchPlacesParams,
  fromSearchPlacesParams,
} from '../lib/placeHelper';

const router = Router();

router.get('/', async (req, res) => {
  const list = await searchPlaces(toSearchPlacesParams(req.query));
  res.send(list.map(i => fromSearchPlacesParams(i)));
});

router.get('/:id', async (req, res) => {
  const data = await getPlaceDetails(req.params.id);
  const result = {
    ...data,
    img: data.image_url,
    address: data.location.display_address.join(', '),
    categories: data.categories.map(category => category.title),
    reviewCount: data.review_count,
  };

  res.send(result);
});

export default router;
