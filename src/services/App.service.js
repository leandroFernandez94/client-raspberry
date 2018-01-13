import axios from 'axios'
import { APP_BASE_PATH } from "../settings";

export const fetchLibraryData = (library) => axios.get(`${APP_BASE_PATH}/${library}`)
