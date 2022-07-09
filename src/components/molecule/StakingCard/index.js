import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Flex,
  Image,
  Link,
  Spacer,
  Text,
  Tooltip
} from "@chakra-ui/react";
import PropTypes from 'prop-types';
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

/*
--------  StakingCard Component -----
* @Description : 
*  StakingCard
*/


export const StakingCard = ({ h, w, height, width, price, name, subTitle, imgSrc, id }) => {
  const navigate = useNavigate();

  const { category } = useParams();

  // convert string to uppercase
  const categoryDisplayName = category.replace(/^./, (str) =>
    str.toUpperCase()
  );

  /*-------------------------------------
  *-------- RENDERED CONTENT ------------
  *------------------------------------*/

  return (
    <React.Fragment>
      <Box
        bg="colors.primary.900"
        alignItems="left"
        borderRadius="xl"
        border="1px solid"
        w={w || width}
        h={h || height}
        color="colors.gray.700"
        overflow="hidden"
      >
        <AspectRatio width="100%" height="45%">
          <Image src={!imgSrc ? "https://via.placeholder.com/150" : imgSrc} />
        </AspectRatio>
        <Box padding={5} maxH={"55%"}>
          <Tooltip label={name === undefined ? "" : name}>
            <Box
              height={"50px"}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              width={"100%"}
            >
              <Text fontSize="xl" color="colors.white" lineHeight="normal">
                {name === undefined ? "" : name}
              </Text>
            </Box>
          </Tooltip>
          <Box>
            <Text
              fontSize="xs"
              color="colors.gray.500"
              marginTop={1}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              whiteSpace={"nowrap"}
            >
              {subTitle === undefined ? "" : subTitle}
            </Text>
          </Box>

          <Flex marginTop={2} marginBottom="auto" flexBasis={"100%"} maxH={"15%"}>
            <Text
              fontSize="md"
              width={"50%"}
              height={"100%"}
              color="colors.gray.500"
            >
              {price === undefined ? "" : "$" + price}
            </Text>
            <Spacer />

            <Link
              // to={`/xchange/markets/category/${name}`}
              className="staking-card-link"
              fontSize={"xs"}
              color="colors.white"
              onClick={() =>
                navigate(`${id}`, {
                  state: { name: name, category: categoryDisplayName, id: id },
                })
              }
            >
              More Details
              <ArrowForwardIcon />
            </Link>
          </Flex>
        </Box>
      </Box>
    </React.Fragment>
  );
};

/*-------------------------------------
*------------- PropTypes  -------------
*------------------------------------*/

StakingCard.propTypes = {
  h: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  w: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
  subTitle: PropTypes.string,
  imgSrc: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])

}

export default StakingCard;