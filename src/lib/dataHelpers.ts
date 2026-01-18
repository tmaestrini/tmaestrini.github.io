import { getCollection } from "astro:content";
import createSlug from "./createSlug";

export namespace Conferences {

    export async function getConferencesSortedByDate() {
        const articles = await getCollection("conferences");
        const filteredArticles = articles.filter((a: any) => !a.draft)
            .sort(
                (a: any, b: any) => {
                    const dateA = a.data.eventDate?.valueOf() || 0;
                    const dateB = b.data.eventDate?.valueOf() || 0;
                    return dateB - dateA;
                },
            );
        return filteredArticles;
    }

    export async function getConferencesByCategory(category: string) {
        const conferences = await getConferencesSortedByDate();
        return conferences.filter((conference) => conference.data.categories?.includes(category));
    }

    export async function getSpeakerBySlug(speakerSlug: string) {
        const conferences = await getCollection("conferences");
        const conferencesOfSpeaker = conferences.filter(conf => conf.data?.speakers?.map(speaker => createSlug(speaker, speaker)).includes(speakerSlug));
        const speakers = conferencesOfSpeaker?.[0]?.data?.speakers || [];
        return speakers.find(speaker => createSlug(speaker, speaker) === speakerSlug) || speakers[0];
    }
}

export namespace Presentations {
    export async function getPresentationsSorted() {
        const presentations = (await getCollection("presentations"))
            .filter((a) => !a.data.draft)
            .sort((a, b) => {
                const dateA = a.data.presentation?.valueOf() || 0;
                const dateB = b.data.presentation?.valueOf() || 0;
                return dateB - dateA;
            });
        return presentations;
    }

    export async function getPresentationsByCategory(category: string) {
        const presentations = await getPresentationsSorted();
        return presentations.filter((presentation) => presentation.data.categories?.includes(category));
    }
}

export namespace Topics {
    export async function getTopicsSortedByDate() {
        const topics = (await getCollection("topics"))
            .filter((a) => !a.data.draft)
            .sort((a, b) => {
                const dateA = a.data.date?.valueOf() || 0;
                const dateB = b.data.date?.valueOf() || 0;
                return dateB - dateA;
            });
        return topics;
    }

    export async function getTopicsByCategory(category: string) {
        const topics = await getTopicsSortedByDate();
        return topics.filter((topic) => topic.data.categories?.includes(category));
    
    }}