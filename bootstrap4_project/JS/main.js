// --------------------to enable popovers in bootstrap 5

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
//-------------------------------------------------------
//---------------------popover dismiss
const popover = new bootstrap.Popover(".popover-dismiss", {
  trigger: "focus",
}); //------------------------------------ offcanvas

$("#skullIsland").click(function () {
  var SkullIslandInfo = `
  <strong>Rating:</strong>	PG-13 (Intense Sci-Fi Violence/Action|Brief Strong Language)<br><br>
  <strong>Genre:</strong>	Sci-Fi, Action, Fantasy, Adventure<br><br>
  <strong>Original Language:</strong>	English<br><br>
  <strong>Director:</strong>	Jordan Vogt-Roberts<br><br>
  <strong>Producer:</strong>	Jon Jashni, Alex Garcia, Thomas Tull, Mary Parent<br><br>
  <strong>Writer:</strong>	Dan Gilroy, Max Borenstein, Derek Connolly<br><br>
  <strong>Release Date (Theaters):</strong>	Mar 10, 2017  Wide<br><br>
  <strong>Release Date (Streaming):</strong>	Jul 4, 2017<br><br>
  <strong>Box Office (Gross USA):</strong>	$168.0M<br><br>
  <strong>Runtime:</strong>	1h 58m<br><br>
  <strong>Distributor:</strong>	Warner Bros. Pictures<br><br>
  <strong>Sound Mix:</strong>	Dolby Digital, SDDS, Datasat<br><br>
  <strong>Aspect Ratio:</strong>	Scope (2.35:1)<br><br>`;
  $("#infoText").html(SkullIslandInfo);
});

$("#ghostInShell").click(function () {
  var ghostInShellInfo = ` 
    <strong>Rating:</strong>	PG-13 (Some Disturbing Images|Intense Sci-Fi Violence|Suggestive Content)<br><br>
    <strong>Genre:</strong>	Sci-Fi, Action, Adventure<br><br>
    <strong>Original Language:</strong>	English<br><br>
    <strong>Director:</strong>	Rupert Sanders<br><br>
    <strong>Producer:</strong>	Avi Arad, Ari Arad, Steven Paul, Michael Costigan<br><br>
    <strong>Writer:</strong>	Jamie Moss, William Wheeler, Ehren Kruger<br><br>
    <strong>Release Date (Theaters):</strong>	Mar 31, 2017  Wide<br><br>
    <strong>Release Date (Streaming):</strong>	Jul 25, 2017<br><br>
    <strong>Box Office (Gross USA):</strong>	$40.5M<br><br>
    <strong>Runtime:</strong>	1h 47m<br><br>
    <strong>Distributor:</strong>	Paramount Pictures<br><br>
    <strong>Sound Mix:</strong>	DTS, Dolby Digital, Dolby Atmos<br><br>
    <strong>Aspect Ratio:</strong>	Flat (1.85:1)<br><br>`;
  $("#infoText").html(ghostInShellInfo);
});

$("#beautyBeast").click(function () {
  var beautyBeastInfo = `
  <strong>Rating:</strong>	PG (Peril|Frightening Images|Some Action Violence)<br><br>
  <strong>Genre:</strong>	Romance, Kids & Family, Fantasy, Musical<br><br>
  <strong>Original Language:</strong>	English<br><br>
  <strong>Director:</strong>	Bill Condon<br><br>
  <strong>Producer:	</strong>David Hoberman, Todd Lieberman<br><br>
  <strong>Writer:</strong>	Stephen Chbosky, Evan Spiliotopoulos<br><br>
  <strong>Release Date (Theaters):</strong>	Mar 17, 2017  Wide<br><br>
  <strong>Release Date (Streaming):</strong>	Jun 13, 2017<br><br>
  <strong>Box Office (Gross USA):</strong>	$504.0M<br><br>
  <strong>Runtime:</strong>	2h 9m<br><br>
  <strong>Distributor:</strong>	Walt Disney<br><br>
  <strong>Sound Mix:</strong>	Dolby Digital<br><br>
  <strong>Aspect Ratio:</strong>	Scope (2.35:1)<br><br>`;
  $("#infoText").html(beautyBeastInfo);
});
