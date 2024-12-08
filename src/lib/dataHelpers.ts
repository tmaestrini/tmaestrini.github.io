import { getCollection } from "astro:content";

export namespace Conferences {

    export async function getConferencesSortedByDate() {
        const articles = await getCollection("conferences");
        const filteredArticles = articles.filter((a: any) => !a.draft)
            .sort(
                (a: any, b: any) =>
                    b.data.eventDate.valueOf() - a.data.eventDate.valueOf(),
            );
        return filteredArticles;
    }

}

export namespace Topics {
    export async function getTopicsSortedByDate() {
        const topics = (await getCollection("topics"))
            .filter((a) => !a.data.draft)
            .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
        return topics;
    }
}