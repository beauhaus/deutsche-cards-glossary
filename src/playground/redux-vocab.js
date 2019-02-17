import { createStore, combineReducers } from 'redux';

const demoState = {
    vocabItems:[{"id": "09871340987",
    "word_de": "der/die/das",
    "word_en": "the",
    "example_de": "Der Sonnenaufgang ist wunderschön",
    "example_en": "The sunrise is beautiful",
    "show_switch": "true",
    "note": "comments/notes",
    "createdAt": 0}],
    filters: {
        'text': 'have',
        'sortBy': 'word_de',
        'startDate': undefined,
        'endDate': undefined
    }
}