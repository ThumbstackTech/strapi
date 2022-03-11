import React from "react";
import { Button } from "@strapi/design-system/Button";
import Twitter from "@strapi/icons/Twitter";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import { useIntl } from "react-intl";

const TweetButton = () => {
    const { formatMessage } = useIntl();
    const { modifiedData, layout, slug } = useCMEditViewDataManager();
    const allowedTypes = ["final-igypsy-destination"]


    const handleClick = () => {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://api.whatsapp.com/send?phone=918097364489&text=Hi,%20I%20want%20to%20know%20about%20${encodeURIComponent(modifiedData.NameOfPlace)}%20id%20${encodeURIComponent(modifiedData.Content_code)}`

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