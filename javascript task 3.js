<!DOCTYPE html>
<html>
		<head>
			<meta charset="UTF-8">
			<title> Javascript Task 3</title>
		</head>
		<body>
			<script>
				function name (parameter)
				{let Array=[];
					for(let i=1; i<=parameter; i++){
					if(i%2==0 && i%3==0 && i%5==0){
					Array.push("yu-gi-oh")}

					else if (i%3==0 && i%5==0){
						Array.push("gi-oh")}

					else if (i%2==0 && i&5==0){
						Array.push("yu-oh")}

					else if(i%2==0 && i%3==0){
						Array.push("yu-gi")}

					else if(i%5==0){
						Array.push("oh")}

					else if(i%3==0){
						Array.push("gi")}

					else if(i%2==0){
						Array.push("yu")}

					else{Array.push(i)}}
						console.log(Array)
						return Array
			</script>		
		</body>
</html>