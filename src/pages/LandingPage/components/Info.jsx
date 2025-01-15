import React from "react";
import { Link } from "react-router-dom";
import { Trans, useTranslation, } from 'react-i18next';

const Info = () => {
  const { t } = useTranslation();
  const url = "https://www.paypal.com/donate/?hosted_button_id=4KLWNM5JWKJ4S";

  return (
    <div className='px-40 text-lg'>
      <p>
        <Trans i18nKey="AT_SAAYAM">
          At <strong>Saayam</strong>, we believe in the power of helping hands reaching out to those facing challenges. Our platform connects individuals and communities worldwide, bridging the gap between those who need assistance and those who are willing to provide it.
        </Trans>
      </p>
      <p className="mt-5">
        {t("OUR_VISION")}
      </p>
      <p className='mt-5'>
        {t("JOIN_US")}
      </p>
      <p className='mt-5'>
        {t("JOIN_TODAY")}
      </p>
      <p className='mt-5'>
        {t("OUR_MOTTO")}
      </p>
      <p className='mt-5'>
        {t("STAY_UPDATED")}
      </p>
      <p className='mt-5'>
        <Trans i18nKey="DONATE_MONEY" values={{ url }} components={{ a: <a /> }}/>
      </p>
      <p className='my-5'>
        Read More{" "}
        <Link className='text-blue-500 underline' to={"how-we-operate"}>
          How we Operate
        </Link>
        !
      </p>
    </div>
  );
};

export default Info;
