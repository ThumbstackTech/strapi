import React from "react";
import { Button } from "@strapi/design-system/Button";
import Twitter from "@strapi/icons/Twitter";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import { useIntl } from "react-intl";

const TweetButton = () => {
    const { formatMessage } = useIntl();
    const { modifiedData, slug } = useCMEditViewDataManager();


    const handleClick = () => {
        const link = encodeURIComponent(`https://api.whatsapp.com/send?phone=918097364489&text=Hi%2C%20I%20want%20to%20know%20about%20${encodeURI(modifiedData.NameOfPlace)}%20id%20${encodeURI(modifiedData.Content_code)}`)
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${link}
        `

        window.open(url);
    }




    const content = {
        id: "components.TweetButton.button",
        defaultMessage: "GENERATE QR",
    };

    return (
        slug == 'api::final-igypsy-destination.final-igypsy-destination'
        && <Button variant="secondary" onClick={handleClick}>
            {formatMessage(content)}
        </Button>
    );
};

export default TweetButton;