import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';

type Props = {
  cts: number[];
};

export const MapForm = ({ cts }: Props) => {
  const formik = useFormik({
    initialValues: {
      cts,
      d: 100,
    },

    onSubmit: (values) => {
      console.log(values)
    },
  });
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="ctx"
          disabled
          value={formik.values.cts}
          sx={{ pb: 2 }}
          label="Координаты"
        />
        <TextField
          label="Диаметр обнаружения"
          name="d"
          value={formik.values.d}
          onChange={formik.handleChange}
          error={formik.touched.d && Boolean(formik.errors.d)}
          helperText={formik.touched.d && formik.errors.d}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Отправить запрос на проверку
        </Button>
      </form>
    </Box>
  );
};
