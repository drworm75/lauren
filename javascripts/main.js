
$("#reveal").on('click', function() {
	$(this).parent('div').prev('div').find('.hidden').removeClass('hidden');
	$(this).replaceWith("<p>Lauren teachs great lessons! She offers the most modestly priced help at a cost of $2.00, or a scone.</p>");
	console.log($(this).parent('div'));
});
