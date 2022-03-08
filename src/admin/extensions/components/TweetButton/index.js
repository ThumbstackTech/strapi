import React from "react";
import { Button } from "@strapi/design-system/Button";
import Twitter from "@strapi/icons/Twitter";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import { useIntl } from "react-intl";

const TweetButton = () => {
    const { formatMessage } = useIntl();
    const { modifiedData, layout } = useCMEditViewDataManager();
    const allowedTypes = ["final-igypsy-destination"]

    const handleClick = () => {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=wa.me?${encodeURIComponent(modifiedData.Destination_Code_City)}`;
        window.open(url);
    }




    const content = {
        id: "components.TweetButton.button",
        defaultMessage: "GENERATE QR",
    };

    return (
        <Button variant="secondary" onClick={handleClick}>
            {formatMessage(content)}
        </Button>
    );
};

export default TweetButton;