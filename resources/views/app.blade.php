<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <!-- Scripts -->
    {{-- @routes --}}
    {{-- @viteReactRefresh --}}
    @vite('resources/css/app.css')
    @vite('resources/css/slick.css')
    @vite(['resources/js/app.jsx', "resources/js/pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
