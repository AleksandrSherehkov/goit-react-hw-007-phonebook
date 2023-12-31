import { useDispatch, useSelector } from 'react-redux';

import { Box } from 'utilities/styles/Box';
import { Text } from 'utilities/styles/Text';

import { InputStyled } from 'components/Filter/Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFieldFilter = ({ currentTarget: { value } }) => dispatch(setFilter(value));

  return (
    <Box my={4} alignItems="flex-start" flexDirection="column" as="label">
      <Text fontSize="m" color="black">
        Find contacts by name
      </Text>
      <InputStyled
        type="text"
        value={filter}
        placeholder="Enter name"
        name="filter"
        onChange={changeFieldFilter}
      />
    </Box>
  );
};
