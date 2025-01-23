# Laravel-Next eCommerce Website
A simple eCommerce website using laravel with sanctum's cookie-based authentication as a backend and next.js with tailwind CSS as a front-end tool.

## Setup Instruction
### Prerequests
1. System requirments
    - Node.js (v18 or higher)
    - PHP (v8.0 or higher)
    - Composer (latest version)
    - MySQL (or any compatible database)
    - Git

2. Clone repository
    ```
        bash
        git clone https://github.com/Andu-alem/HomeAssignment.git
        cd HomeAssignment
    ```
### Backend Setup (Laravel)
1. Navigate to the backend folder
    ```
    cd backend
    ```
2. Install PHP dependencies
    ```
    composer install
    ```
3. Configure the `.env` file:
    - It is already configured to work with sqlite database but if want to change to mysql
        ```env
        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_DATABASE=<database-name>
        DB_USERNAME=<database-username>
        DB_PASSWORD=<database-password>
        APP_URL=http://localhost:8000
        ```
4. Run migrations and seed the database
    ```
    php artisan migrate
    php artisan db:seed
    ```
5. Start the Laravel development server
    ```
    php artisan serve
    ```

    -- The backend will be available at `http://localhost:8000`.

### Frontend Setup (Next.js)
1. Navigate to the frontend folder
    ```
    cd frontend
    ```
2. Install Node.js dependencies
    ```
    npm install
    ```
3. Configure the ‘.env.local’ file
    - ensure there is ‘env.local’ file with             NEXT_PUBLIC_API_URL=http://localhost:8000
4. Start Next.js development server
    ```
    npm run dev
    ```

    -- The frontend will be available at `http://localhost:3000`.