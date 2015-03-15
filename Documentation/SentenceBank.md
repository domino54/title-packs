[SentenceBank.Script.txt](https://github.com/domino54/title-packs/blob/master/Scripts/Libs/domino54/SentenceBank.Script.txt)
-------------------------

This library contains all sentences translated by third-party users in their native languages. Used exclusively by [Translations](https://github.com/domino54/title-packs/blob/master/Documentation/Translations.md) library. Using only this library is almost useless.

### Functions

#### GetScriptVersion
* Returns `Text` containing actual script version (`"YYYY-MM-DD"`)

#### GetScriptName
* Returns `Text` containing actual script name (`"SentenceBank.Script.txt"`)

#### GetIndex
* Returns `Integer` ID of specified input english message, if exists. If not, returns `0`.
* Parameters:
	* `Text _Message`: look for ID of this message

#### GetGerman
* Returns `Text` german (de) sentence from specified ID, if exists. If not, returns `""`.
* Parameters:
	* `Integer _Index`: look for message with this ID

#### GetFrench
* Returns `Text` french (fr) sentence from specified ID, if exists. If not, returns `""`.
* Parameters:
	* `Integer _Index`: look for message with this ID

#### GetDutch
* Returns `Text` dutch (nl) sentence from specified ID, if exists. If not, returns `""`.
* Parameters:
	* `Integer _Index`: look for message with this ID

#### GetPolish
* Returns `Text` polish (pl) sentence from specified ID, if exists. If not, returns `""`.
* Parameters:
	* `Integer _Index`: look for message with this ID

#### GetPortugese
* Returns `Text` portugese (pt, pt_BR) translation from specified ID, if exists. If not, returns `""`.
* Parameters:
	* `Integer _Index`: look for message with this ID

#### GetRussian
* Reurns `Text` russian (ru) translation from specified ID, if exists. If not, returns `""`.
* Parameters:
	* `Integer _Index`: look for message with this ID

#### GetSlovak
* Returns `Text` slovak (sk) translation from specified ID, if exists. If not, returns `""`.
* Parameters:
	* `Integer _Index`: look for message with this ID
