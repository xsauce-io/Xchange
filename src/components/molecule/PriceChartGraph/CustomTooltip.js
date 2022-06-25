import { format, parseISO } from "date-fns";
import PropTypes from 'prop-types';
import React from "react";

/*
--------  CustomTooltip Component -----
* @Description : 
*  CustomTooltip used by the PriceChartGraph component.
*/

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            /*-------------------------------------
            *-------- RENDERED CONTENT ------------
            *------------------------------------*/
            <React.Fragment>
                <div className="tooltip">
                    <h5 className="tooltip">
                        {format(parseISO(label), "eeee, d MMM, yyyy")}
                    </h5>
                    <p className="tooltip">${payload[0].value.toFixed(2)} DAI</p>
                </div>
            </React.Fragment>
        );
    }
    return null;
};


/*-------------------------------------
*------------- PropTypes  -------------
*------------------------------------*/

CustomTooltip.propTypes = {
    active: PropTypes.object,
    payload: PropTypes.object,
    label: PropTypes.string

};

export default CustomTooltip;
