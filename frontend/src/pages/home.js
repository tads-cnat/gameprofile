import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

function Home() {
    return (
        <div className='w-full h-full p-10'>
            <Box sx={{ display: 'flex', alignItems: 'center' }} className='bg-gray-200 rounded p-10 w-full'>
                <Skeleton variant="circular" width={150} height={150} />
                <Skeleton variant="rectangular"  width={250} height={25} className='ml-10'/>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', direction: 'row'}} className='mt-10 h-4/6'>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }} className='bg-gray-200 rounded p-10 w-4/6 mr-2 h-full'>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }} className='bg-gray-200 rounded p-10  w-2/6 ml-2 h-full'>
                </Box>


            </Box>
            


        </div>
    );
}

export default Home;