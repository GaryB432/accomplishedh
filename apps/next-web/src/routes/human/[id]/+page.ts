import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = (ctx) => {
  console.log(`${ctx.route.id} route has a routeId.`);
  // error(500, "oh oh problems");
  return {
    subject: "human route",
  };
};

// import type { PageLoad } from './$types';

// export const load: PageLoad = ({ params }) => {
// 	return {
// 		post: {
// 			title: `Title for ${params.slug} goes here`,
// 			content: `Content for ${params.slug} goes here`
// 		}
// 	};
// };
