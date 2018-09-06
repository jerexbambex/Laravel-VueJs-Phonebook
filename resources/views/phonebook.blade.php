<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Phonebook</title>
		<link rel="stylesheet" href="{{ asset('css/app.css') }}">
		<link rel="stylesheet" href="{{ asset('css/mine.css') }}">
	</head>
	<body>
		<div id="app">
			<my-header></my-header>

			<div class="container">
				<router-view></router-view>
			</div>

			<my-footer></my-footer>
		</div>
		<script src="{{ asset('js/app.js') }}"></script>
	</body>
</html>