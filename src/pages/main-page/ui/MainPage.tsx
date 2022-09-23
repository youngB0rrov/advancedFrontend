import {FunctionComponent} from "react";
import {Button} from "shared/ui/Button/ui/Button";
import {useTranslation} from "react-i18next";

const MainPage:FunctionComponent = () => {
    const {t} = useTranslation();

    return (
        <div>
            {t('Главная страница')}
        </div>
    )
}

export default MainPage;