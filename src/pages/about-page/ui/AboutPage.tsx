import {FunctionComponent} from "react";
import {useTranslation} from "react-i18next";

const AboutPage: FunctionComponent = () => {
    // можно использовать namespace - названия файлов json, для асинхронной подргузки тех переводов
    // которые не используются на данный момент в текущем компоненте
    const {t} = useTranslation('about');
    return (
        <div>
            {t('Страница о нас')}
        </div>
    )
}

export default AboutPage;