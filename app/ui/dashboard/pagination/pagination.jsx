"use client"
import * as React from 'react';
import { styled } from '@mui/system';
import {
  TablePagination,
  tablePaginationClasses as classes,
} from '@mui/base/TablePagination';
import FirstPageRoundedIcon from '@mui/icons-material/FirstPageRounded';
import LastPageRoundedIcon from '@mui/icons-material/LastPageRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

export const Pagination = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <CustomTablePagination
      rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
      colSpan={3}
      count={13}
      rowsPerPage={rowsPerPage}
      page={page}
      slotProps={{
        select: {
          'aria-label': 'Rows per page',
        },
        actions: {
          showFirstButton: true,
          showLastButton: true,
          slots: {
            firstPageIcon: FirstPageRoundedIcon,
            lastPageIcon: LastPageRoundedIcon,
            nextPageIcon: ChevronRightRoundedIcon,
            backPageIcon: ChevronLeftRoundedIcon,
          },
          },
            }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage
            }
    />
  );
}

const blue = {
  200: '#A5D8FF',
  400: '#3399FF',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};


const CustomTablePagination = styled(TablePagination)(
  ({ theme }) => `
  & .${classes.spacer} {
    display: none;
  }

  & .${classes.toolbar}  {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    background-color: #fff;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
    padding: 5px 20px;
    border-radius: 10px;
  }

  & .${classes.selectLabel} {
    margin: 0;
    color: ${grey[900]};
    width: 150px;
  }

  & .${classes.select}{
    font-family: 'IBM Plex Sans', sans-serif;
    padding: 2px 0 2px 4px;
    border: 1px solid ${grey[200]};
    border-radius: 6px; 
    background-color: transparent;
    color: ${grey[900]};
    transition: all 100ms ease;

    &:hover {
      background-color: ${grey[50]};
      border-color: ${grey[300]};
    }

    &:focus {
      outline: 3px solid ${blue[200]};
      border-color: ${blue[400]};
    }
  }

  & .${classes.displayedRows} {
    margin: 0;
    color: ${grey[900]};
    width: 150px;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.actions} {
    display: flex;
    gap: 6px;
    border: transparent;
    text-align: center;
  }

  & .${classes.actions} > button {
    display: flex;
    align-items: center;
    padding: 0;
    border: transparent;
    border-radius: 50%; 
    background-color: transparent;
    border: 1px solid ${grey[200]};
    color: ${grey[900]};
    transition: all 100ms ease;

    > svg {
      font-size: 22px;
    }

    &:hover {
      background-color: ${grey[50]};
      border-color: ${grey[300]};
    }

    &:focus {
      outline: 3px solid ${blue[200]};
      border-color: ${blue[400]};
    }

    &:disabled {
      opacity: 0.3;
      &:hover {
        border: 1px solid ${grey[200]};
        background-color: transparent;
      }
    }
  }
  `,
);

export default Pagination;