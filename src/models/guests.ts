export interface Guests {
  adults: number,
  children: number,
  infants: number,
  pets: number
}

export const defaultGuests: Guests = {
  adults: 0,
  children: 0,
  infants: 0,
  pets: 0
}

export const updateGuests = (guests: Guests) => {

  const canRemoveAdult = () =>
    (guests.children === 0 && guests.infants === 0 && guests.pets === 0 && guests.adults > 0) || guests.adults > 1;

  const addChild = () => {
    guests.pets++;

    if (guests.adults === 0) {
      guests.adults++;
    }
  }

  const addInfant = () => {
    guests.infants++;

    if (guests.adults === 0) {
      guests.adults++;
    }
  }

  const addPet = () => {
    guests.pets++;

    if (guests.adults === 0) {
      guests.adults++;
    }
  }

  return {
    canRemoveAdult,
    addChild,
    addInfant,
    addPet
  }
}


