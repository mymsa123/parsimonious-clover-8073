import React, { useState } from "react";
import styles from "../styles/ProductCard.module.css";

import { useDisclosure } from "@chakra-ui/react";
import { Image, VStack, Text, Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export const ProductCard = ({
  id,
  Name,
  Image,
  Price,
  Desc,
  Category,
  Manufacturer,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  const [addedToCart, setAddedToCart] = useState(false);

  const handleClick = () => {
    let obj = {
      name: Name,
      price: Price,
      img: Image,
    };

    const isAlreadyBought = cartData.some(
      (boughtItem) =>
        boughtItem.name === obj.name && boughtItem.price === obj.price
    );

    if (!isAlreadyBought) {
      const newCartData = [...cartData, obj];
      localStorage.setItem("cartData", JSON.stringify(newCartData));
      setAddedToCart(true);
    } else {
      alert("This item is already in your cart!");
    }
  };

  return (
    <div className={styles.card}>
      <img
        src={Image}
        alt=""
        width={200}
        className={styles.card_img}
        onClick={onOpen}
      />
      {/* <p>{id}</p> */}
      <h4 className={styles.text_title}>{Name}</h4>
      <div className={styles.card_footer}>
        <h4 className={styles.text_title}>₹{Price}</h4>
        <Button className={styles.cartBtn} onClick={handleClick}>
          {addedToCart ? "Added to Cart" : "Add to Cart"}
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{Name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <img src={Image} width={100} />
              <Text>Product : {Name}</Text>
              <Text>Brand : {Manufacturer}</Text>
              <Text>Category : {Category}</Text>
              <Text>Price : {Price}</Text>
              <Text>Details: {Desc}</Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
