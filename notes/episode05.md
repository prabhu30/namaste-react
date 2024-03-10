## Types of Import & Export

- There are two types of import and export

  - Default
  - Named

- Default :- These can be used when you want to export/import just one entity

  ```
  export default Profile;

  import Profile from './components/Profile.js';
  ```

- Named :- These can be used when you want to export/import multiple entities from a file

  ```
  export const LOGO_URL;
  export let LaptopsList;

  import { LOGO_URL, LaptopsList } from './utils/constants.js';
  ```
