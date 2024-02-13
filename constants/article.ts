import { ArticlesProps } from "@/types";
import PREVIEW_IMAGE from "@/utils/image";



const largeDescription = `<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat faucibus id vitae suspendisse. Ipsum erat malesuada sit faucibus faucibus massa. Mauris et morbi vitae habitant sit. Maecenas pretium in consectetur velit auctor. Porttitor tellus ut pretium, scelerisque orci erat. Etiam imperdiet ridiculus eu tincidunt. Vel dui, pulvinar vivamus lorem risus.
</p>
<br/>

<p>Bibendum aliquet adipiscing sed interdum. Arcu consequat fames blandit nisi. Vulputate dignissim tempus duis ultrices. Arcu sed porttitor morbi lobortis mattis pellentesque. Dui quam sed eu ultrices ut nullam. Maecenas tortor auctor eros erat volutpat sapien dui pretium.
</p>

<br/>
<p>Hac sed diam tristique in consequat in suspendisse habitant. Et mauris venenatis posuere auctor tortor, placerat. Quisque tincidunt euismod dictum neque, massa nisi. Sagittis, dictum nibh bibendum cursus neque, nunc molestie. Odio viverra sagittis, platea nibh eget. Egestas a cras bibendum amet, mi magna cursus. Ante suscipit felis vitae amet.</p>

`;



// data for multiple articles
// created a helper function PREVIEW_IMAGE to reduce typing paths to image assets
const articlesData: ArticlesProps[] = [
  {
    "slug": "consectetur-adipiscing",
    "coverImage": PREVIEW_IMAGE("image_one"),
    "title": "AI to run on all ants half of all new vehicles lorem ipsum",
    "alt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "description": largeDescription,
    "tag": "news",
    "created_at": "September 21, 2021",
    "is_featured": true
  },
  {
    "slug": "lorem-consectetur-adipiscing",
    "coverImage": PREVIEW_IMAGE("main_cover_image"),
    "title": "By 2030 AI to run on all ants half of all new vehicles lorem ipsum",
    "alt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "description": largeDescription,
    "tag": "news",
    "created_at": "September 21, 2021",
    "is_featured": false
  },
  {
    "slug": "ipsum-consectetur-adipiscing",
    "coverImage": PREVIEW_IMAGE("image_one"),
    "title": "Batteries stay fully charge for 9 hours on all vehicles lorem ipsum",
    "alt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "description": largeDescription,
    "tag": "news",
    "created_at": "September 21, 2021",
    "is_featured": false
  },
  {
    "slug": "ipsum-consectetur-adipiscing-s",
    "coverImage": PREVIEW_IMAGE("main_cover_image"),
    "title": "The CEO wants half of all new span vehicles lorem ipsum",
    "alt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "description": largeDescription,
    "tag": "news",
    "created_at": "September 21, 2021",
    "is_featured": true
  }
]


export default articlesData;
