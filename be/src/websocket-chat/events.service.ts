import {Injectable} from '@nestjs/common';

@Injectable()
export class EventsService {
    constructor() {
    }

    counterPhrase = 0
    botPhrases: { eng: string, rus: string }[] = [
        {eng: 'Hello!', rus: 'Здравствуйте!'},
        {eng: 'What a shiny day!', rus: 'Какой блестящий день!'},
        {
            eng: 'The Samurai has no goal, only a path...',
            rus: 'У самурая нет цели, только путь...'
        },
        {eng: 'Go on...', rus: 'Продолжай...'},
        {eng: 'Wow...', rus: 'Ух ты...'},
        {eng: '* whistling *', rus: '* насвистывает *'},
        {eng: 'Please, leave me alone for now.', rus: 'Пожалуйста, оставьте меня в покое.'},
        {eng: 'are u winning son?', rus: 'ты выигрываешь сынок?'},
        {eng: 'What the fuck do I do when sabotage is all I know?', rus: 'ватавфакдуайду'},
        {eng: 'GO AWAY!!!', rus: 'УХОДИ!!!'},
        {eng: '...', rus: '...'},
    ]
    botEggPhrase = {eng: 'Have I told you what madness is?', rus: 'Я уже говорил тебе что такое безумие?'}
    botMadnessPhrase = {
        eng: 'I am so filled with my knowledge...',
        rus: 'Я в своем познании настолько преисполнился...'
    }

    nextPhrase() {
        const text = (this.counterPhrase < this.botPhrases.length)
            ? this.botPhrases[this.counterPhrase]
            : this.botPhrases[this.botPhrases.length - 1]
        this.counterPhrase++
        if (this.counterPhrase === 20) {
            return this.botEggPhrase
        }
        if (this.counterPhrase === 25) {
            return this.botMadnessPhrase
        }
        if (this.counterPhrase > 30) {
            this.counterPhrase = 0
        }
        return text
    }

}
